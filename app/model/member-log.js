'use strict'
/**
 * 用户访问操作日志
 */
module.exports = app => {
    const mongoose = app.mongoose;
    const MemberLogSchema = new mongoose.Schema({
        uid: String,
        uri: String,
        method: String,
        query: { type: String, default: '' },
        params: { type: String, default: '' },
        body: { type: String, default: '' },
        agent: String,
        ip: String,
        at: { type: Date, default: Date.now}
    }, {
            collection: 'memberLog',
            versionKey: false,
        });
    MemberLogSchema.index({ at: -1 });
    return mongoose.model('MemberLog', MemberLogSchema);
}
