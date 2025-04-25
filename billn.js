Java.perform(function () {
    send("billn.js loaded");
    let jexpiredTimeSecond = "9999999";
    let jcurrentSpanVip = "9999999";
    let jexpiredTime = "2030-11-11 11:11:11"

    let MainActivity = Java.use("com.bilin.acc.ui.MainActivity");
    MainActivity["$init"].implementation = function () {
        send(`MainActivity.$init is called`);
        this["$init"]();
    };

    let MineFragment = Java.use("com.bilin.acc.ui.mine.fragment.MineFragment");
    MineFragment["updateMemberBackground"].implementation = function (userBean) {
        send(userBean);
        // set userBean.expiredTime = jexpiredTime
        userBean.expiredTime = jexpiredTime;
        userBean.expiredTimeSecond = jexpiredTimeSecond;
        send(`OrdinaryExpireTime: ${userBean.getOrdinaryExpireTime()}`);
        send(`MineFragment.updateMemberBackground is called: userBean=${userBean}`);
        this["updateMemberBackground"](userBean);
    };

    let LoginUtils = Java.use("com.bilin.acc.login.LoginUtils");
    LoginUtils["isVip"].implementation = function () {
        console.log(`LoginUtils.isVip is called`);
        let result = this["isVip"]();
        console.log(`LoginUtils.isVip result=${result}`);
        return true;
    };

    // let VipComboAdapter = Java.use("com.bilin.acc.adapter.VipComboAdapter");
    // VipComboAdapter["setVipType"].implementation = function (i) {
    //     send(`VipComboAdapter.setVipType is called: i=${i}`);
    //     this["setVipType"](0);
    // };
    // VipComboAdapter["getVipType"].implementation = function () {
    //     send(`VipComboAdapter.getVipType is called`);
    //     // let result = this["getVipType"]();
    //     send(`VipComboAdapter.getVipType result=${result}`);
    //     return 0;
    // };

    let UserBean = Java.use("com.bilin.acc.bean.UserBean");
    // let jexpiredTimeSecond = "9999999";
    // let jexpiredTime = "2030-11-11 11:11:11"

    UserBean["isAdvanced"].implementation = function () {
        console.log(`UserBean.isAdvanced is called`);
        let result = this["isAdvanced"]();
        console.log(`UserBean.isAdvanced result=${result}`);
        return true;
    };

    UserBean["isAdvancedSecond"].implementation = function () {
        send(this);
        send(`UserBean.isAdvancedSecond is called`);
        let result = this["isAdvancedSecond"]();
        send(`UserBean.isAdvancedSecond result=${result}`);
        // return result;
        return true;
    };
    UserBean["getExpiredTime"].implementation = function () {
        console.log(`UserBean.getExpiredTime is called`);
        let result = this["getExpiredTime"]();
        console.log(`UserBean.getExpiredTime result=${result}`);
        return result;
    };
    UserBean["getExpiredTimeSecond"].implementation = function () {
        send(`UserBean.getExpiredTimeSecond is called`);
        let result = this["getExpiredTimeSecond"]();
        send(`UserBean.getExpiredTimeSecond result=${result}`);
        return jexpiredTimeSecond;
    };
    UserBean["copy"].implementation = function (accountToken, userId, userUrl, mail, countryCode, mobileNum, firstPayTime, nickname, sex, birthday, clientIpInfo, expiredTime, ordinaryExpireTime, cancelProtectTime, isDelete, experienceTime, ordinaryExpireTimeSecond, expiredTimeSecond, experienceExpiryTime, expiredExperienceTime, billingType, databaseNum, createTime, wallLogSwitch, mobileMaxConnects, freeGameList, gameList, hardwareId, heartBeatInterval, hostGame, isEnableVideo, isOwnAllGames, isPayUser, isSwitchPackage, osType, packageId, packageLevel, packageSwitchTime, pauseStatus, pcMaxConnects, securityLevel, srcChannel, totalMaxConnects, status, userFrom, vipLevel,) {
        send(`UserBean.copy is called: accountToken=${accountToken}, userId=${userId}, userUrl=${userUrl}, mail=${mail}, countryCode=${countryCode}, mobileNum=${mobileNum}, firstPayTime=${firstPayTime}, nickname=${nickname}, sex=${sex}, birthday=${birthday}, clientIpInfo=${clientIpInfo}, expiredTime=${expiredTime}, ordinaryExpireTime=${ordinaryExpireTime}, cancelProtectTime=${cancelProtectTime}, isDelete=${isDelete}, experienceTime=${experienceTime}, ordinaryExpireTimeSecond=${ordinaryExpireTimeSecond}, expiredTimeSecond=${expiredTimeSecond}, experienceExpiryTime=${experienceExpiryTime}, expiredExperienceTime=${expiredExperienceTime}, billingType=${billingType}, databaseNum=${databaseNum}, createTime=${createTime}, wallLogSwitch=${wallLogSwitch}, mobileMaxConnects=${mobileMaxConnects}, freeGameList=${freeGameList}, gameList=${gameList}, hardwareId=${hardwareId}, heartBeatInterval=${heartBeatInterval}, hostGame=${hostGame}, isEnableVideo=${isEnableVideo}, isOwnAllGames=${isOwnAllGames}, isPayUser=${isPayUser}, isSwitchPackage=${isSwitchPackage}, osType=${osType}, packageId=${packageId}, packageLevel=${packageLevel}, packageSwitchTime=${packageSwitchTime}, pauseStatus=${pauseStatus}, pcMaxConnects=${pcMaxConnects}, securityLevel=${securityLevel}, srcChannel=${srcChannel}, totalMaxConnects=${totalMaxConnects}, status=${status}, userFrom=${userFrom}, vipLevel=${vipLevel}`);
        expiredTimeSecond = jexpiredTimeSecond;
        expiredTime = jexpiredTime;
        let result = this["copy"](accountToken, userId, userUrl, mail, countryCode, mobileNum, firstPayTime, nickname, sex, birthday, clientIpInfo, expiredTime, ordinaryExpireTime, cancelProtectTime, isDelete, experienceTime, ordinaryExpireTimeSecond, expiredTimeSecond, experienceExpiryTime, expiredExperienceTime, billingType, databaseNum, createTime, wallLogSwitch, mobileMaxConnects, freeGameList, gameList, hardwareId, heartBeatInterval, hostGame, isEnableVideo, isOwnAllGames, isPayUser, isSwitchPackage, osType, packageId, packageLevel, packageSwitchTime, pauseStatus, pcMaxConnects, securityLevel, srcChannel, totalMaxConnects, status, userFrom, vipLevel);
        send(`UserBean.copy result=${result}`);
        return result;
    };
    UserBean["$init"].implementation = function (str, str2, str3, str4, num, str5, str6, str7, num2, str8, clientIpInfo, str9, str10, str11, num3, num4, str12, str13, str14, str15, num5, num6, str16, num7, num8, str17, str18, str19, num9, str20, bool, num10, num11, num12, num13, num14, num15, str21, num16, num17, num18, str22, num19, num20, num21, num22,) {
        send(`UserBean.$init is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}, num=${num}, str5=${str5}, str6=${str6}, str7=${str7}, num2=${num2}, str8=${str8}, clientIpInfo=${clientIpInfo}, str9=${str9}, str10=${str10}, str11=${str11}, num3=${num3}, num4=${num4}, str12=${str12}, str13=${str13}, str14=${str14}, str15=${str15}, num5=${num5}, num6=${num6}, str16=${str16}, num7=${num7}, num8=${num8}, str17=${str17}, str18=${str18}, str19=${str19}, num9=${num9}, str20=${str20}, bool=${bool}, num10=${num10}, num11=${num11}, num12=${num12}, num13=${num13}, num14=${num14}, num15=${num15}, str21=${str21}, num16=${num16}, num17=${num17}, num18=${num18}, str22=${str22}, num19=${num19}, num20=${num20}, num21=${num21}, num22=${num22}`);
        str13 = jexpiredTimeSecond;
        str9 = jexpiredTime;
        this["$init"](str, str2, str3, str4, num, str5, str6, str7, num2, str8, clientIpInfo, str9, str10, str11, num3, num4, str12, str13, str14, str15, num5, num6, str16, num7, num8, str17, str18, str19, num9, str20, bool, num10, num11, num12, num13, num14, num15, str21, num16, num17, num18, str22, num19, num20, num21, num22);
    };

    UserBean["getCurrentSpanVip"].implementation = function (vipTime) {
        console.log(`UserBean.getCurrentSpanVip is called: vipTime=${vipTime}`);
        let result = this["getCurrentSpanVip"](vipTime);
        console.log(`UserBean.getCurrentSpanVip result=${result}`);
        return jcurrentSpanVip;
    };
    UserBean["isAdvanced"].implementation = function () {
        console.log(`UserBean.isAdvanced is called`);
        let result = this["isAdvanced"]();
        console.log(`UserBean.isAdvanced result=${result}`);
        return true;
    };
    // UserBean["getVipTimeString"].implementation = function (type) {
    //     console.log(`UserBean.getVipTimeString is called: type=${type}`);
    //     let result = this["getVipTimeString"](type);
    //     console.log(`UserBean.getVipTimeString result=${result}`);
    //     return result;
    // };
    send("hook finished");
})