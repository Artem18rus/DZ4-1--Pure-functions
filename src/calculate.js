// eslint-disable-next-line consistent-return
export default function total(incoming) {
  if (incoming.health > 50) {
    return 'healthy';
  }
  if (incoming.health <= 50 && incoming.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
