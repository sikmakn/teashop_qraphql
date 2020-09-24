export function calculatePrice(weight: number, fullPrice: number, discount?: number) {
    return weight * fullPrice * (discount ? discount / 100 : 1)
}