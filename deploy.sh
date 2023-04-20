#!/usr/bin/env sh

# остановить публикацию
set -e

#сборка приложения
npm run build

№переход в каталог сборки
cd dist

№инициализация репозитория и загрузка кода в github
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Arsan1993/vueproject.git master:gh-pages

cd-