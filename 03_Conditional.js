function main(n) {
    if (n % 2 == 1) {
        console.log("Weird")
    } else {
        if (n % 2 == 0) {
            if (n <= 5 && n >= 2) {
                console.log("Not Weird")
            } else if (n <= 20 && n >= 6) {
                console.log("Weird")
            } else if (n >= 20) {
                console.log("Not Weird")
            }
        }
    }
}
main(3)
main(24)