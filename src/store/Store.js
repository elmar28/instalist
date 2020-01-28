import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    dataAll: '',
    // 初期データを宣言
    mediaAll: [
    ]
  },
  mutations:{
    // 実際にStateのデータを更新する処理を記述する。
    dataAll: ( state, payload ) => {
      //console.info(payload);
      if(!payload.id){
        state.dataAll = state.dataAll.media.data.concat(payload.data);
        return;
      }

      //初回時
      state.dataAll = payload;
    },
    mediaAll: ( state, payload ) => {
      if(!payload.id){
        state.mediaAll = state.mediaAll.concat(payload.data);
        return;
      }

      //初回時
      state.mediaAll = state.mediaAll.concat(payload.media.data);
    }
  },
  actions:{
    // コンポーネントからリクエストを受けて、処理する下準備をするための関数
    updateMediaAll: (context, payload) => {
      // 例えばバックエンドDBからのデータ取得などはここで済ませること
      // commit関数で、Mutationsで定義した関数を指定して呼び出す
      //console.log(payload)

      context.commit('dataAll', payload);
      context.commit('mediaAll', payload);
    }
  }
})