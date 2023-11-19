<template>
  <footer p="y15 x15" flex="~ col gap4">
    <div flex="~ row gap2" items-center my2>
      <img src="/movies-sm.webp" width="25" height="25" alt="Logo">
      <div text-xl>
        StillWatch
      </div>
    </div>
    <div flex="~ row gap2" items-center>
      <p text-true-gray:90 text-sm>
        Created by <a href="https:///web-avenir.fr" target="_blank" rel="noopener">Web Avenir</a>
      </p>
    </div>
    <div flex gap4 items-center>
      <LanguageSwitcher />
    </div>
  </footer>
</template>
