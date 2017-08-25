const allStatus = {
    orderStatus: {
        'init': '新增订单',
        'needPay': '待付款',
        'confirmPay': '待确认到账',
        'paid': '已付款，待发货',
        'producing': '已付款，正在生产',
        'produced': '生产完成，待付尾款',
        'shipped': '已发货',
        'needContract': '待上传合同',
        'canceled': '订单取消',
        'done': '已完成',
        'serviceReq': '申请售后',
        'serviceApproved': '售后申请处理中',
        'serviceDone': '售后处理完成',
        'serviceRefuse': '售后申请驳回'
    },
    produceStatus: {
        'init': '新增单据',
        'purchase': '采购',
        'producing': '正在生产',
        'produced': '生产完成',
        'done': '已入库'
    },
    cashStatus: {
        'needPay': '待付款',
        'confirmPay': '客户确认打款',
        'paid': '确认到账',
        'canceled': '取消'
    },
    outStatus: {
        'init': '待发货',
        'print': '已打印物流单',
        'shipped': '已发货'
    },
    purchaseStatus: {
        'init': '新增采购',
        'needIn': '待入库',
        'done': '已入库'
    },
    serviceStatus: {
        'serviceReq': '新增售后',
        'serviceApproved': '确认受理',
        'serviceDone': '处理完成',
        'serviceRefuse': '驳回'
    },
    serviceType: {
        'back': '退货',
        'exchange': '换货',
        'other': '其他'
    },
    invoiceStatus: {
        'invoiceReq': '待审核',
        'shipped': '已邮寄',
        'refuse': '驳回'
    },
    invoiceType: {
        'personal': '个人增值税普通发票',
        'normal': '企业增值税普通发票',
        'special': '增值税专用发票'
    },
    shipCompany: {
        'annengwuliu': '安能物流',
        'debangwuli': '德邦物流',
        'huitongkuaidi': '百世汇通',
        'shunfeng': '顺丰',
        'yto': '圆通'
    },
    warehouseCountType: {
        'warehouse': '按照仓库盘点',
        'product': '按照产品盘点',
        'location': '按照货位盘点',
        'all': '全部盘点'
    },
    warehouseCountStatus: {
        'counting': '盘点中',
        'approve': '待审核',
        'approved': '审核通过',
        'refused': '作废'
    },
    returnStatus: {
        'init': '正在计算',
        'done': '已出账单',
        'needPay': '正在提现',
        'paid': '提现完成'
    },
    materialStatus: {
        'init': '新增申请',
        'out': '生成出库单',
        'shipped': '已发货',
        'purchase': '正在采购',
    }
}

export default allStatus

