function sum(a, b) {

    // a = a ? a : 0
    // b = b ? b : 0

    if (!a) {
        a = 0;
    }
    if (!b) {
        b = 0;
    }

    return parseInt(a, 10) + parseInt(b, 10);
}

// export default sum 
module.exports = sum