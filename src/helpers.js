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
    "OnDemand Fish",
    "Fish Development",
    "Fish Solution",
    "Fish Points",
    "Fish Forever",
    "Fish Square",
    "Fish Villa"
];

export function getStoreName() {
    const storeNames = [
        "OnDemand Fish",
        "Fish Development",
        "Fish Solution",
        "Fish Points",
        "Fish Forever",
        "Fish Square",
        "Fish Villa"
    ];

    return rando(storeNames);
}
