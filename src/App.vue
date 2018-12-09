<template>
  <div id="app">
    <div style="width: 1000px;margin: auto;">
      <div style="margin: 20px 0">
        <el-card>
          <el-form :inline="true" class="demo-form-inline"">
            <el-form-item label="Line Nums">
              <el-input-number v-model="lineNum" controls-position="right" :min="100" :max="20000" :step="100"></el-input-number>
            </el-form-item>
            <el-button @click="genData">Generate Data</el-button>
          </el-form>
          <h4>Table Attributes</h4>

          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="height">
              <el-input-number v-model="tableAttribute.height" controls-position="right" :min="1" :max="2000" :step="50"></el-input-number>
            </el-form-item>
            <el-form-item label="itemHeight">
              <el-input-number v-model="tableAttribute.itemHeight" controls-position="right" :min="1" :max="100" :step="1"></el-input-number>
            </el-form-item>
            <el-form-item label="bordered">
              <el-select v-model="tableAttribute.bordered">
                <el-option label="true" :value="true"></el-option>
                <el-option label="false" :value="false"></el-option>
              </el-select>
            </el-form-item>
             <el-form-item label="hoverHighlight">
              <el-select v-model="tableAttribute.hoverHighlight">
                <el-option label="true" :value="true"></el-option>
                <el-option label="false" :value="false"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="selectable">
              <el-select v-model="tableAttribute.selectable">
                <el-option label="true" :value="true"></el-option>
                <el-option label="false" :value="false"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="enableExport">
              <el-select v-model="tableAttribute.enableExport">
                <el-option label="true" :value="true"></el-option>
                <el-option label="false" :value="false"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="language">
              <el-select v-model="tableAttribute.language">
                <el-option label="en" value="en"></el-option>
                <el-option label="cn" value="cn"></el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <h4>Table Config</h4>
          <el-collapse accordion>
            <el-collapse-item title="user" name="2">
              <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="name">
                  <el-input v-model="userConfig.name" @change="updateTableConfig('user', userConfig)"></el-input>
                </el-form-item>
                <el-form-item label="searchable">
                  <el-select v-model="userConfig.searchable" @change="updateTableConfig('user', userConfig)">
                    <el-option label="true" :value="true"></el-option>
                    <el-option label="false" :value="false"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="sortable">
                  <el-select v-model="userConfig.sortable" @change="updateTableConfig('user', userConfig)">
                    <el-option label="true" :value="true"></el-option>
                    <el-option label="false" :value="false"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="summary">
                  <el-select v-model="userConfig.summary" @change="updateTableConfig('user', userConfig)">
                    <el-option label="" value=""></el-option>
                    <el-option label="COUNT" value="COUNT"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="prefix">
                  <el-input v-model="userConfig.prefix" @change="updateTableConfig('user', userConfig)"></el-input>
                </el-form-item>
                <el-form-item label="suffix">
                  <el-input v-model="userConfig.suffix" @change="updateTableConfig('user', userConfig)"></el-input>
                </el-form-item>
                <el-form-item label="isHidden">
                  <el-select v-model="userConfig.isHidden" @change="updateTableConfig('user', userConfig)">
                    <el-option label="true" :value="true"></el-option>
                    <el-option label="false" :value="false"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-collapse-item>
            <el-collapse-item title="age" name="3">
              <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="name">
                  <el-input v-model="ageConfig.name" @change="updateTableConfig('age', ageConfig)"></el-input>
                </el-form-item>
                <el-form-item label="numberFilter">
                  <el-select v-model="ageConfig.numberFilter" @change="updateTableConfig('age', ageConfig)">
                    <el-option label="true" :value="true"></el-option>
                    <el-option label="false" :value="false"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="sortable">
                  <el-select v-model="ageConfig.sortable" @change="updateTableConfig('age', ageConfig)">
                    <el-option label="true" :value="true"></el-option>
                    <el-option label="false" :value="false"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="summary">
                  <el-select v-model="ageConfig.summary" @change="updateTableConfig('age', ageConfig)">
                    <el-option label="" value=""></el-option>
                    <el-option label="COUNT" value="COUNT"></el-option>
                    <el-option label="SUM" value="SUM"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="prefix">
                  <el-input v-model="ageConfig.prefix" @change="updateTableConfig('age', ageConfig)"></el-input>
                </el-form-item>
                <el-form-item label="suffix">
                  <el-input v-model="ageConfig.suffix" @change="updateTableConfig('age', ageConfig)"></el-input>
                </el-form-item>
                <el-form-item label="isHidden">
                  <el-select v-model="ageConfig.isHidden" @change="updateTableConfig('age', ageConfig)">
                    <el-option label="true" :value="true"></el-option>
                    <el-option label="false" :value="false"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-collapse-item>
            <el-collapse-item title="city" name="4">
              <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="name">
                  <el-input v-model="cityConfig.name" @change="updateTableConfig('city', cityConfig)"></el-input>
                </el-form-item>
                <el-form-item label="filterable">
                  <el-select v-model="cityConfig.filterable" @change="updateTableConfig('city', cityConfig)">
                    <el-option label="true" :value="true"></el-option>
                    <el-option label="false" :value="false"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="isHidden">
                  <el-select v-model="cityConfig.isHidden" @change="updateTableConfig('city', cityConfig)">
                    <el-option label="true" :value="true"></el-option>
                    <el-option label="false" :value="false"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </div>
      <vue-virtual-table
      :config="tableConfig"
      :data="tableData"
      :height="tableAttribute.height"
      :itemHeight="tableAttribute.itemHeight"
      :minWidth="tableAttribute.minWidth"
      :selectable="tableAttribute.selectable"
      :enableExport="tableAttribute.enableExport"
      :bordered="tableAttribute.bordered"
      :hoverHighlight="tableAttribute.hoverHighlight"
      :language="tableAttribute.language"
      v-on:changeSelection="handleSelectionChange"
    >
      <template slot-scope="scope" slot="actionCommon">
        <el-button size="mini" @click="edit(scope.index, scope.row)">Edit</el-button>
        <el-button size="mini" @click="del(scope.index, scope.row)">Delete</el-button>
      </template>
    </vue-virtual-table>
   </div>
  </div>
</template>

<script>
import VueVirtualTable from './components/vue-virtual-table'
import TestPlain from './components/test-plain.vue'

export default {
  name: 'app',
  data (){
    return {
      tableConfig: [
        {prop: '_index', name: '#', width: 80},
        {prop: 'user', name: 'User', searchable: true, sortable: true, summary: 'COUNT'},
        {prop: 'age', name: 'Age', numberFilter: true},
        {prop: 'city', name: 'City', filterable: true},
        {prop: '_action', name: 'Action', actionName: 'actionCommon'}
      ],
      tableData: [
        {user: 'a1', age: 20, city: 'a'},
        {user: 'a2', age: 21, city: 'b'},
        {user: 'a3', age: 23, city: 'a'}
      ],
      tableAttribute: {
        height: 800,
        itemHeight: 55,
        minWidth: 1000,
        selectable: true,
        enableExport: true,
        bordered: false,
        hoverHighlight: true,
        language: 'en'
      },
      lineNum: 1000,
      userConfig: {
        prop: 'user', name: 'User', searchable: true, sortable: true, summary: 'COUNT', alignItems: 'center', isHidden: false, 
      },
      ageConfig: {
        prop: 'age', name: 'Age', numberFilter: true, sortable: false, summary: '', alignItems: 'center', isHidden: false, 
      },
      cityConfig: {
        prop: 'city', name: 'City', filterable: true, summary: '', alignItems: 'center', isHidden: false
      }
    }
  },
  components: {
    VueVirtualTable,
    TestPlain
  },
  mounted(){
    this.genData()
  },
  methods: {
    updateTableConfig(prop, conf){
      let propIndex = this.tableConfig.findIndex(v => v.prop == prop)
      this.tableConfig.splice(propIndex, 1, conf)
    },
    handleSelectionChange(rows){
      console.log(rows)
    },
    edit(index, row){
      console.log(index)
      this.$notify({
        title: 'Click Edit',
        message: `index:${index},row:${JSON.stringify(row)}`
      });
    },
    del(index, row){
      console.log(index)
      this.$notify({
        title: 'Click Delete',
        message: `index:${index},row:${JSON.stringify(row)}`
      });
    },
    genData(){
      this.randomData(this.lineNum)
    },
    randomData(len){
      let cts = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n']
      let all_data = []
      for(let i = 0;i<len;i++){
        let user = 'u'+this.uuid(6, 10),
            age = Math.floor((34-16)*Math.random())+16
        let cityIndex = Math.floor(cts.length*Math.random())
        let city = cts[cityIndex]
        all_data.push({user, age, city})
      }
      this.tableData = all_data
    },
    uuid(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;
     
        if (len) {
          // Compact form
          for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
        } else {
          // rfc4122, version 4 form
          var r;
     
          // rfc4122 requires these characters
          uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
          uuid[14] = '4';
     
          // Fill in random data.  At i==19 set the high bits of clock sequence as
          // per rfc4122, sec. 4.1.5
          for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
              r = 0 | Math.random()*16;
              uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
          }
        }
     
        return uuid.join('');
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
}
</style>
