const Mock = require('mockjs');

const HEALTH_CHECK = [
  {
    url: '/health-check',
    method: 'get',
    response (req, res) {
      return {
        code: 200,
        msg: 'success',
        data: {
          ...req.query,
        },
      };
    },
  },
  {
    url: '/health-check',
    method: 'post',
    response (req, res) {
      return {
        code: 200,
        msg: 'success',
        data: {
          query: {
            ...req.query,
          },
          body: {
            ...req.body,
          },
        },
      };
    },
  },
  {
    url: '/health-check',
    method: 'put',
    response (req, res) {
      const template = {
        title: 'Syntax Demo',

        'string1|1-10': '★',
        'string2|3': 'value',

        'number1|+1': 100,
        'number2|1-100': 100,
        'number3|1-100.1-10': 1,
        'number4|123.1-10': 1,
        'number5|123.3': 1,
        'number6|123.10': 1.1234,

        'boolean1|1': true,
        'boolean2|1-2': true,

        'object1|2-4': {
          110000: '北京市',
          120000: '天津市',
          130000: '河北省',
          140000: '山西省',
        },
        'object2|2': {
          310000: '上海市',
          320000: '江苏省',
          330000: '浙江省',
          340000: '安徽省',
        },

        'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
        'array2|1-10': ['Mock.js'],
        'array3|3': ['Mock.js'],

        function: function () {
          return this.title;
        },
      };
      return Mock.mock(template);
    },
  }
];

module.exports = {
  HEALTH_CHECK,
};
