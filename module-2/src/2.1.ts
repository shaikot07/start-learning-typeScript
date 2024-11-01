{
    console.log('hello world');




    // type assertion

    const kgToGm = (value: string | number): string | number | undefined => {

        if (typeof value === 'string') {
            const convertateValue = parseFloat(value) * 1000;
            return `The value is: ${convertateValue}`
        };
        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number
    console.log(result1);
console.log('hey ');

}