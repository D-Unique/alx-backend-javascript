function calculateNumber(type, a, b) {
    switch (type) {
        case 'SUM':
            const roundedSum = Math.round(a) + Math.round(b);
            return roundedSum;
            break;
        case 'SUBTRACT':
            const roundedSub = Math.round(a) - Math.round(b);
            return roundedSub;
            break;
        case 'DIVIDE':
            if (Math.round(b) === 0) {
                return 'Error';
            } else {
                const roundedDiv = Math.round(a) / Math.round(b);
                return roundedDiv;
            }
    }
    }

module.exports = calculateNumber;
