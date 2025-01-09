interface HasOrderProp {
  order: number;
}
export const byOrder = (a: HasOrderProp, b: HasOrderProp): number =>
  a.order - b.order;
