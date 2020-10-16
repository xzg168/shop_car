<template>
  <div>
    <a-list :grid="{ gutter: 16, column:5 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card :title="item.title">
          <img
            slot="cover"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        <template slot="actions" class="ant-card-actions">
          <!-- <a-icon key="add" type="plus" /> -->
          <a-button type="danger">加入购物车</a-button>
        </template>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  }
];
export default {
  data() {
    return {
      data
    };
  }
};
</script>
