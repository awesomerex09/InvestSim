@echo off
setlocal enabledelayedexpansion

echo.
echo ======================================================
echo InvestSim - GitHub Auto Updater
echo ======================================================
echo.

where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in PATH.
    pause
    exit /b 1
)

if not exist "client\index.html" (
    echo [ERROR] Cannot find client\index.html.
    echo Please run this script from the InvestSim root directory.
    pause
    exit /b 1
)

echo Enter commit message (leave blank for auto-generated message):
set /p COMMIT_MSG="> "
if "%COMMIT_MSG%"=="" (
    for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set DATE_STR=%%a-%%b-%%c
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set TIME_STR=%%a:%%b
    set COMMIT_MSG=chore: auto-update [!DATE_STR! !TIME_STR!]
)

echo.
echo [1/4] Checking Git status...
git status --short
echo.

echo [2/4] Staging all changes...
git add -A
if %errorlevel% neq 0 (
    echo [ERROR] git add failed.
    pause
    exit /b 1
)

echo [3/4] Committing changes: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"
if %errorlevel% neq 0 (
    echo [INFO] No new changes to commit, or commit failed (this is usually fine if up to date).
)

echo [4/4] Pushing to GitHub (origin/main)...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed!
    echo Check if remote origin is set, or if you need to authenticate.
    echo Hand-run: git push -u origin main
) else (
    echo.
    echo ======================================================
    echo [SUCCESS] Successfully pushed to GitHub!
    echo ======================================================
)

echo.
pause
