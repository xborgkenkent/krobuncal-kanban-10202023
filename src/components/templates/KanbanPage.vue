<template>
  <header aria-label="Todo Tasks">
      <slot name="header"></slot>
  </header>

  <aside aria-label="Navs">
      <slot name="sidebar"></slot>
  </aside>
  <main class="task-details" aria-label="Todo Tasks">
      <slot name="main">

      </slot>
  </main>
  <footer aria-label="Todo Tasks">
      <slot name="footer"></slot>
  </footer>
</template>