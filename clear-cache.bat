@echo off
echo ========================================
echo  CLEARING CACHE AND REBUILDING
echo ========================================
echo.

echo [1/5] Stopping any running dev servers...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo [2/5] Deleting .next folder...
if exist .next rmdir /s /q .next
echo .next folder deleted!

echo [3/5] Clearing npm cache...
call npm cache clean --force
echo npm cache cleared!

echo [4/5] Deleting node_modules/.cache...
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo Cache folder deleted!

echo [5/5] Rebuilding project...
call npm run build

echo.
echo ========================================
echo  CACHE CLEARED AND BUILD COMPLETE!
echo ========================================
echo.
echo To start dev server, run: npm run dev
echo To start production server, run: npm start
pause
