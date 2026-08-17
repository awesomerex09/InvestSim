@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

echo.
echo ╔══════════════════════════════════════════════════════╗
echo ║         InvestSim — GitHub Auto Updater              ║
echo ║         台灣投資人生模擬器  自動上傳腳本              ║
echo ╚══════════════════════════════════════════════════════╝
echo.

:: ── Check git is available ──────────────────────────────
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] git 未安裝或未加入 PATH。請先安裝 Git for Windows。
    pause
    exit /b 1
)

:: ── Make sure we are in the right directory ──────────────
if not exist "client\index.html" (
    echo [ERROR] 找不到 client\index.html。
    echo         請確認此批次檔位於 InvestSim 根目錄下。
    pause
    exit /b 1
)

:: ── Ask for commit message ────────────────────────────────
echo 請輸入本次更新的描述（直接按 Enter 使用預設訊息）：
set /p COMMIT_MSG="> "
if "%COMMIT_MSG%"=="" (
    for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set DATE_STR=%%a/%%b/%%c
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set TIME_STR=%%a:%%b
    set COMMIT_MSG=chore: auto-update [!DATE_STR! !TIME_STR!]
)

echo.
echo [1/4] 檢查 Git 狀態...
git status --short
echo.

echo [2/4] 加入所有變更...
git add -A
if %errorlevel% neq 0 (
    echo [ERROR] git add 失敗。
    pause
    exit /b 1
)

echo [3/4] 提交變更："%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"
if %errorlevel% neq 0 (
    echo [INFO] 沒有新的變更需要提交，或 commit 失敗。
)

echo [4/4] 推送到 GitHub (origin/main)...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] 推送失敗！可能的原因：
    echo   1. 尚未設定 remote: git remote add origin https://github.com/awesomerex09/InvestSim.git
    echo   2. 需要登入 GitHub: 請確認 Git Credential Manager 已設定
    echo   3. 網路問題或分支名稱不符
    echo.
    echo 手動指令參考：
    echo   git remote add origin https://github.com/awesomerex09/InvestSim.git
    echo   git push -u origin main
) else (
    echo.
    echo ╔══════════════════════════════════════════════════════╗
    echo ║  ✅  SUCCESS！成功推送到 GitHub！                    ║
    echo ║  🔗  https://github.com/awesomerex09/InvestSim       ║
    echo ╚══════════════════════════════════════════════════════╝
)

echo.
pause
