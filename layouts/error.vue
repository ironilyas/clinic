<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <span>Страница не найдена</span>
    </div>
  </div>
</template>

<style scoped>
  .error-layout{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .error-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
  }

  .error-title{
    color: rgb(145, 6, 6);
    margin-bottom: 1rem;
  }
</style>
