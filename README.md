After cloning:
Navigate into your new directory: cd <your-new-app-name>
Remove the existing Git history: Delete the hidden .git folder (e.g., rm -rf .git on macOS/Linux or rd /s /q .git on Windows).
Initialize a new Git repository: Run git init to start a brand-new history for your app.
Run the installation command (usually npm install)

python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn

source venv/bin/activate
pip install sqlalchemy aiosqlite