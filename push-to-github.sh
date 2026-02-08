#!/bin/bash

# リモートが既に存在する場合は削除
git remote remove origin 2>/dev/null

# 新しいリモートを追加
git remote add origin https://github.com/tachibana2314/codestyle-clone.git

# mainブランチにプッシュ
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🔗 Repository URL: https://github.com/tachibana2314/codestyle-clone"
