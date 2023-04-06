export const colorInterpolator = (a, b, amount) => { 

    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

export const colorInterpolator4 = (a, b, c, d, e,  amount) => { 

    if(amount  <0.25)
        return colorInterpolator(a, b, amount/0.25);
    else if(amount  <0.5)
        return colorInterpolator(b, c, (amount - 0.25)/0.25);
    else if(amount  <0.75)
        return colorInterpolator(c, d, (amount - 0.5)/0.25);
    if(amount  <=1.0)
        return colorInterpolator(d, e, (amount - 0.75)/0.25);

}