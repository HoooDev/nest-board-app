function scopeA() {
  const dolharubang = '슈-욱';

  function scopeB() {
    const dolharubang = '슈슉';

    console.log(dolharubang);
  }
  scopeB(); // 슈슉
  console.log(dolharubang);
}

scopeA(); // 슈-욱
console.log(dolharubang); // reference error
