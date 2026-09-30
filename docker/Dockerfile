FROM node:24-slim AS builder

# builder stage
WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# production stage
FROM node:24-slim AS production

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=production

COPY --from=builder /build/dist ./dist

EXPOSE 3000

RUN adduser --system nodejs

USER nodejs

CMD ["node", "dist/index.js"]