// 创建reducer 函数， 专门用来处理发送过来的action

const initState = {
  count:0
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'send_type':
      return Object.assign({}, state, action);
    case 'add_action':
      return {
        count: state.count + 1
      }
    default:
    return state;
  }
}

module.exports = {
  reducer
}
