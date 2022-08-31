// eslint-disable-next-line consistent-return
export default function total(purchases) {
  if (purchases.health > 50) {
    return 'healthy';
  }
  if (purchases.health <= 50 && purchases.health > 15) {
    return 'wounded';
  }
  if (purchases.health < 15) {
    return 'critical';
  }
}
