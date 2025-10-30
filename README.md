# Firebase Studio

Это стартовый проект NextJS в Firebase Studio.

Чтобы начать, взгляните на `src/app/page.tsx`.

---

## Развертывание на GitHub Pages

Это приложение Next.js использует функции, которые требуют серверной среды (например, Next.js Image Optimization и Server Actions). GitHub Pages предназначен для хостинга **статических** сайтов. Чтобы развернуть это приложение, нам нужно создать его статическую версию.

### Пошаговая инструкция

#### Шаг 1: Настройка репозитория на GitHub

1.  Создайте новый репозиторий на GitHub.
2.  Загрузите код вашего приложения в этот репозиторий.

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/ВАШ_ЛОГИН/ВАШ_РЕПОЗИТОРИЙ.git
    git push -u origin main
    ```

#### Шаг 2: Настройка GitHub Pages

1.  В вашем репозитории на GitHub перейдите в **Settings** > **Pages**.
2.  В разделе **Build and deployment**, выберите **Source** как **GitHub Actions**. Это позволит нам использовать автоматизированный процесс для сборки и развертывания сайта.

#### Шаг 3: Добавление GitHub Action для развертывания

1.  В вашем проекте создайте папку `.github`, а внутри нее папку `workflows`.
2.  Создайте файл с именем `deploy.yml` в папке `.github/workflows/` со следующим содержимым:

    ```yml
    name: Deploy to GitHub Pages

    on:
      push:
        branches:
          - main # Развертывание будет происходить при каждом пуше в ветку main

    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout 🛎️
            uses: actions/checkout@v3

          - name: Setup Node.js 📈
            uses: actions/setup-node@v3
            with:
              node-version: '20'

          - name: Install dependencies 📦
            run: npm install

          - name: Build project 🏗️
            run: npm run build

          - name: Upload artifact ⬆️
            uses: actions/upload-pages-artifact@v2
            with:
              path: ./out

          - name: Deploy to GitHub Pages 🚀
            id: deployment
            uses: actions/deploy-pages@v2
    ```

#### Шаг 4: Активация развертывания

1.  Сохраните изменения и отправьте их в ваш репозиторий на GitHub.

    ```bash
    git add .github/workflows/deploy.yml
    git commit -m "Add GitHub Action for deployment"
    git push
    ```

2.  Перейдите в раздел **Actions** вашего репозитория. Вы должны увидеть запущенный процесс сборки и развертывания.
3.  После успешного завершения процесса ваш сайт будет доступен по адресу `https://<ВАШ_ЛОГИН>.github.io/<ВАШ_РЕПОЗИТОРИЙ>/`.

Готово! Ваше портфолио теперь размещено на GitHub Pages.