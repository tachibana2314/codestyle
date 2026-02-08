#!/bin/bash

# 新しいリポジトリに移行するスクリプト
echo "🔄 Migrating to new repository..."

# リモートを新しいリポジトリに変更
git remote remove origin
git remote add origin https://github.com/tachibana2314/codestyle-clone.git

# mainブランチにプッシュ
git push -u origin main

echo "✅ Migration completed!"
echo "🔗 New repository: https://github.com/tachibana2314/codestyle-clone"
