export const FormatTolerances = (
    tolerances: { key: string; value: number[] }[] | Record<string, number[]>
): string => {
    if (Array.isArray(tolerances)) {
        return tolerances
            .map(tolerance => `${tolerance.value.join(' - ')} (${tolerance.key})`)
            .join('\n');
    } else {
        return Object.entries(tolerances)
            .map(([key, value]) => `${key}: ${value.join(' - ')}`)
            .join('\n');
    }
};