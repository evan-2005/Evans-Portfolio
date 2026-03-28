import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const PingPong = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'paused' | 'gameOver'>('idle');
  const [score, setScore] = useState({ player: 0, ai: 0 });
  const [winner, setWinner] = useState<'player' | 'ai' | null>(null);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = 600;
    const height = canvas.height = 400;

    const paddleWidth = 10;
    const paddleHeight = 80;
    const ballSize = 10;

    let playerY = height / 2 - paddleHeight / 2;
    let aiY = height / 2 - paddleHeight / 2;
    let ballX = width / 2;
    let ballY = height / 2;
    let ballVX = 4;
    let ballVY = 4;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      playerY = relativeY - paddleHeight / 2;
      
      if (playerY < 0) playerY = 0;
      if (playerY > height - paddleHeight) playerY = height - paddleHeight;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const resetBall = () => {
      ballX = width / 2;
      ballY = height / 2;
      ballVX = (Math.random() > 0.5 ? 4 : -4);
      ballVY = (Math.random() > 0.5 ? 4 : -4);
    };

    const update = () => {
      ballX += ballVX;
      ballY += ballVY;

      if (ballY < 0 || ballY > height - ballSize) {
        ballVY = -ballVY;
      }

      const aiSpeed = 3.5;
      const aiCenter = aiY + paddleHeight / 2;
      if (aiCenter < ballY - 10) aiY += aiSpeed;
      else if (aiCenter > ballY + 10) aiY -= aiSpeed;

      if (aiY < 0) aiY = 0;
      if (aiY > height - paddleHeight) aiY = height - paddleHeight;

      if (ballX < paddleWidth) {
        if (ballY > playerY && ballY < playerY + paddleHeight) {
          ballVX = -ballVX * 1.05;
          ballX = paddleWidth;
        } else if (ballX < 0) {
          const newAiScore = score.ai + 1;
          setScore(s => ({ ...s, ai: newAiScore }));
          if (newAiScore >= 5) {
            setWinner('ai');
            setGameState('gameOver');
          } else {
            resetBall();
          }
        }
      }

      if (ballX > width - paddleWidth - ballSize) {
        if (ballY > aiY && ballY < aiY + paddleHeight) {
          ballVX = -ballVX * 1.05;
          ballX = width - paddleWidth - ballSize;
        } else if (ballX > width) {
          const newPlayerScore = score.player + 1;
          setScore(s => ({ ...s, player: newPlayerScore }));
          if (newPlayerScore >= 5) {
            setWinner('player');
            setGameState('gameOver');
          } else {
            resetBall();
          }
        }
      }

      ctx.clearRect(0, 0, width, height);

      ctx.setLineDash([10, 10]);
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#111111';
      ctx.beginPath();
      ctx.roundRect(0, playerY, paddleWidth, paddleHeight, 5);
      ctx.fill();

      ctx.fillStyle = '#ff3b30';
      ctx.beginPath();
      ctx.roundRect(width - paddleWidth, aiY, paddleWidth, paddleHeight, 5);
      ctx.fill();

      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(255, 59, 48, 0.5)';
      ctx.fillStyle = '#ff3b30';
      ctx.beginPath();
      ctx.arc(ballX + ballSize / 2, ballY + ballSize / 2, ballSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      if (gameState === 'playing') {
        animationFrameId = requestAnimationFrame(update);
      }
    };

    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [gameState, score]);

  const resetGame = () => {
    setScore({ player: 0, ai: 0 });
    setWinner(null);
    setGameState('playing');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      onMouseLeave={() => {
        if (gameState === 'playing') setGameState('paused');
      }}
      className="relative group w-full h-full bg-surface border border-black/5 rounded-[40px] shadow-2xl overflow-hidden flex flex-col items-center justify-center cursor-none"
    >
      {(gameState === 'idle' || gameState === 'paused' || gameState === 'gameOver') && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center">
          {gameState === 'gameOver' ? (
            <>
              <h3 className="text-4xl font-black text-primary mb-2">
                {winner === 'player' ? 'YOU WIN!' : 'GAME OVER'}
              </h3>
              <p className="text-[10px] uppercase font-black tracking-widest text-textMuted mb-8 opacity-60">Final Score: {score.player} - {score.ai}</p>
              <button
                onClick={resetGame}
                className="px-8 py-4 bg-primary text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-accent transition-all duration-300"
              >
                Play Again
              </button>
            </>
          ) : (
            <>
              <h3 className="text-4xl font-black text-primary mb-2">
                {gameState === 'idle' ? 'Retro Ping Pong' : 'Game Paused'}
              </h3>
              <p className="text-[10px] uppercase font-black tracking-widest text-textMuted mb-8 opacity-60">
                {gameState === 'idle' ? 'Hand-eye coordination test' : 'Hover back to resume'}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setGameState('playing')}
                  className="px-8 py-4 bg-primary text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-accent transition-all duration-300"
                >
                  {gameState === 'idle' ? 'Start Game' : 'Resume'}
                </button>
                {gameState === 'paused' && (
                  <button
                    onClick={resetGame}
                    className="px-8 py-4 border border-black/10 text-primary rounded-full text-xs font-black uppercase tracking-widest hover:bg-surface transition-all duration-300"
                  >
                    Restart
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}

      <div className="w-full h-full relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-12 text-6xl font-black text-primary/10 select-none">
          <span>{score.player}</span>
          <span>{score.ai}</span>
        </div>
        <canvas ref={canvasRef} className="w-full h-full object-contain" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-widest text-textMuted/40">
          Slide to move paddle • First to 5 wins
        </div>
      </div>
    </motion.div>
  );
};
