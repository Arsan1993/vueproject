<template>
    <ul class="catalog__pagination pagination">
          <li class="pagination__item">
           <a class="pagination__link pagination__link--arrow"
         aria-label="Предыдущая страница" @click.prevent="paginate(prevPage)"
         :class="{'pagination__link--disabled': page === prevPage}">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
          </li>
          <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber"  @click.prevent="paginate(pageNumber)">
            <a href="#" class="pagination__link" :class="{'pagination__link--current': pageNumber === page, 'pagination__link--disabled': pageNumber === page}">
              {{ pageNumber }}
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow" href="#" aria-label="Следующая страница" @click.prevent="paginate(nextPage)"
         :class="{'pagination__link--disabled': page === nextPage}">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </a>
          </li>
        </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
    prevPage() {
      if (this.page === 1) {
        return this.page;
      }
      return this.page - 1;
    },
    nextPage() {
      if (this.page >= this.pages) {
        return this.page;
      }
      return this.page + 1;
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
  },
};
</script>
