# expo-variant-example

Expoでローカル・ステージング・本番のように環境別に別のアプリとしてビルドするときのサンプル例

## 技術スタック

- **フレームワーク**: Expo SDK + React Native
- **言語**: TypeScript 5.9
- **ルーティング**: expo-router 6
- **リンター**: oxlint + oxfmt

## ディレクトリ構成

## 開発コマンド

```bash
# 開発サーバー起動
bun start

# iOS シミュレーターで起動
bun ios

# リント
bun lint

# リント + 自動修正
bun lint:fix

# フォーマット
bun format
```


## ビルドバリアント

`APP_VARIANT`環境変数で切り替える
