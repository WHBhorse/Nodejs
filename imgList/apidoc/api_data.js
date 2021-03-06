define({ "api": [
  {
    "type": "post",
    "url": "/file/addImg",
    "title": "添加",
    "name": "add",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回删除包含结果信息对象err:状态码，msg：返回信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/delFile",
    "title": "删除图片",
    "name": "delFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgName",
            "description": "<p>图片名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回删除包含结果信息对象err:状态码，msg：返回信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/findImg",
    "title": "查询",
    "name": "find",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回删除包含结果信息对象err:状态码，msg：返回信息,data:数据库返回的数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/delImg",
    "title": "删除",
    "name": "remove",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ids",
            "description": "<p>_id数组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回删除包含结果信息对象err:状态码，msg：返回信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/updataImg",
    "title": "上传图片",
    "name": "updata",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回删除包含结果信息对象err:状态码，msg：返回信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/fileRouter.js",
    "groupTitle": "File"
  }
] });
