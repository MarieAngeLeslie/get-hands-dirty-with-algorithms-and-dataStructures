"use strict";
function towerOfHanoi(n, frompeg, topeg, aux) {
    if (n == 1) {
        console.log(`Move disk 1 from ${frompeg} to ${topeg}`);
        return;
    }
    towerOfHanoi(n - 1, frompeg, aux, topeg);
    console.log(`Move disk ${n} from ${frompeg} to ${topeg}`);
    towerOfHanoi(n - 1, aux, topeg, frompeg);
}
towerOfHanoi(3, 'A', 'B', 'C');
