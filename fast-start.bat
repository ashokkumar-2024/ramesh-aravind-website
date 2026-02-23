@echo off
taskkill /F /IM node.exe 2>nul
if exist .next rmdir /s /q .next
echo Cache cleared! Starting dev server...
start cmd /k npm run dev
