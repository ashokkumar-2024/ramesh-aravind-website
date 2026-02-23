@echo off
echo Stopping dev server...
taskkill /F /IM node.exe 2>nul
timeout /t 1 /nobreak >nul

echo Deleting .next...
if exist .next rmdir /s /q .next

echo Starting dev server...
start cmd /k npm run dev
