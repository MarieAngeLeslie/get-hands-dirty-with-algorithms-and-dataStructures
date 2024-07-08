"use strict";
function towersOfHanoi(n, frompeg, topeg, auxpeg) {
    // If only 1 disk, make the move and return
    if (n == 1) {
        console.log(`\nMove disk 1 from peg ${frompeg} to peg ${topeg}`);
        return;
    }
    // Move top n-1 disks from A to B, using C as auxiliary
    towersOfHanoi(n - 1, frompeg, auxpeg, topeg);
    // Move remaining disks from A to C
    console.log(`\nMove disk ${n} from peg ${frompeg} to peg ${topeg}`);
    // Move n-1 disks from B to C using A as auxiliary
    towersOfHanoi(n - 1, auxpeg, topeg, frompeg);
}
towersOfHanoi(3, 'A', 'B', 'C');
