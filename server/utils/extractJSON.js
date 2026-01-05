export const extractJSON = (text) => {
    // Remove Markdown ```json ``` or ```
    const cleaned = text
        .trim()
        .replace(/^```json\s*/, '')  // Remove ```json
        .replace(/^```\s*/, '')      // Remove ```
        .replace(/```$/, '');        // Remove closing ```
    return JSON.parse(cleaned);
}
