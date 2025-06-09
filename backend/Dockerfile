# 예시: Node.js + Yarn
FROM node:18-alpine

WORKDIR /usr/src/app

# yarn.lock 파일이 있으면 yarn install이 더 빠르고 일관성 있음
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile --production # 프로덕션 의존성만 설치

COPY . .

# 애플리케이션이 사용하는 포트 (예: 3000)
EXPOSE 3000

# 애플리케이션 실행 시 DB_HOST, DB_USER 등의 환경 변수를 참조하도록 코드 작성
CMD [ "yarn", "start" ]