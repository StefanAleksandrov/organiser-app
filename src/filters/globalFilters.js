export default {
    toUpperCase(value) {
        if (typeof value === "string") return value.toUpperCase();

        return value;
    },

    date(value) {
        if (value.includes("T")) return value.split("T")[0];

        return value;
    }
}