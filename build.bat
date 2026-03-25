@echo off
echo Building project...
node node_modules\typescript\bin\tsc && node node_modules\vite\bin\vite.js build
echo Done.
pause
