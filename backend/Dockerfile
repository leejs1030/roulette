# --- 1. 빌드 단계 (Builder Stage) ---
# 빌드에 필요한 모든 의존성(devDependencies 포함)을 설치합니다.
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# package.json과 yarn.lock을 먼저 복사하여 의존성 레이어 캐싱을 활용합니다.
COPY package.json yarn.lock* ./
RUN yarn install

# 나머지 소스 코드를 복사합니다.
COPY . .

# 애플리케이션을 빌드합니다 (TypeScript -> JavaScript).
RUN yarn run build


# --- 2. 프로덕션 단계 (Production Stage) ---
# 실제 운영에 사용할 가벼운 이미지를 만듭니다.
FROM node:22-alpine

WORKDIR /usr/src/app

# 프로덕션에 필요한 의존성만 설치합니다.
COPY package.json yarn.lock* ./
RUN yarn install --production --frozen-lockfile

# 빌드 단계에서 생성된 빌드 결과물(dist 폴더)과 node_modules를 복사합니다.
# 이렇게 하면 devDependencies가 포함된 무거운 node_modules를 가져오지 않습니다.
COPY --from=builder /usr/src/app/dist ./dist

# 애플리케이션 시작! (컴파일된 main.js 파일을 직접 실행)
CMD ["node", "dist/main"]