export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const storeNames = [
  "Fruit Points",
  "Fruit Development",
  "Fruit Solution",
  "Fruit Forever",
  "Fruit Square",
  "Fruit Villa"
];

export function getStoreName() {
  const storeNames = [
    "Fruit Points",
    "Fruit Development",
    "Fruit Solution",
    "Fruit Forever",
    "Fruit Square",
    "Fruit Villa"
  ];

  return rando(storeNames);
}
