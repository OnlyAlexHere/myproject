    // Page object library for Forsight
module.exports = {
    url: 'https://hellouat.forsight.online/auth',
    elements: {
        EleFrom: {selector: '#drag1', locateStrategy: 'css selector'},
        EleTo: {selector: '#div2', locateStrategy: 'css selector'},
// Login Page
        Logo: {selector: '#left-menu > div:nth-child(6) > img', locateStrategy: 'css selector'},
        UsernameInput: {selector: '#continueInput', locateStrategy: 'css selector'},
        PasswordInput: {selector: '#userExistsPassword', locateStrategy: 'css selector'},
        ConfirmUsername: {selector: 'body > app-root > div.main-content > div > auth > div > div.col-8.col-lg-4.col-md-6 > div.row.form-container.m-t-30 > div.col-12.m-t-24 > button', locateStrategy: 'css selector'},
        LoginBtn: {selector: 'body > app-root > div.main-content > div > auth > div > div.col-8.col-lg-4.col-md-6 > div.row.form-container > div > div:nth-child(4) > div > div > button', locateStrategy: 'css selector'},

// Process Management
        ProcessManagementIcon: {selector: '//*[@id="left-menu"]/ul/li[1]/img', locateStrategy: 'xpath'},
        ProcessManagementText: {selector: '//*[@id="left-menu"]/ul/li[1]/div[2]', locateStrategy: 'xpath'},
        DesignsIcon: {selector: '//*[@id="process-management-expandable"]/li[2]/div[1]', locateStrategy: 'xpath'},
      
        // Designs Screen
        AddDesignBtn: {selector: 'body > app-root > div.main-content > div > account > div > div.row.m-t-40 > div > add-button.float-right.m-l-16.ng-star-inserted > div > div > div.add-button', locateStrategy: 'css selector'},
        DesignNameInput: {selector: 'body > app-root > div.main-content > div > new-process-definition > div > div:nth-child(2) > div.col-lg-7 > input', locateStrategy: 'css selector'},
        VariableTypeBtn: {selector: '//*[@id="5e14e7c5-ee9a-c1ba-7a08-4ad9d988db14"]/span/img', locateStrategy: 'xpath'},
        VariableNameInput: {selector: 'body > app-root > div.main-content > div > new-process-definition > div > div:nth-child(5) > div > process-definition-parameters > div > div:nth-child(2) > div:nth-child(4) > input', locateStrategy: 'css selector'},
        VariableValueInput: {selector: '#\38 53b0f7d-d3ff-2cf0-0351-8d3fef9ed978', locateStrategy: 'css selector'},
        TypeAttribute: {selector: '//*[@id="e0ae8fcc-5cd1-fab1-e2e8-c08be643691e"]/div[2]', locateStrategy: 'xpath'},
        DescriptionBox: {selector: '/html/body/app-root/div[2]/div/new-process-definition/div/div[3]/div/textarea', locateStrategy: 'xpath'},
        TypeValue: {selector: '#\38 2921faa-c4e5-8808-4687-e6ed09c37346 > div:nth-child(1)', locateStrategy: 'css selector'},
        Create_DesignBtn: {selector: 'body > app-root > div.main-content > div > new-process-definition > div > div:nth-child(8) > div.col-md-12.m-t-40 > button.form-btn.float-right.footer-btn-pos.m-l-24.ng-star-inserted', locateStrategy: 'css selector'},
        DesignUpdatedPopUp: {selector: 'body > div.cdk-visually-hidden', locateStrategy: 'css selector'},
        SaveBtn: {selector: 'body > app-root > div.main-content > div > new-process-definition > div > div:nth-child(8) > div.col-md-12.m-t-40 > button.form-btn.float-right.footer-btn-pos.m-l-24', locateStrategy: 'css selector'},
              
        // Activity Page
        NewActivityBtn: {selector: '//*[@id="add-activity-btn"]/div/div/div', locateStrategy: 'xpath'},
        ActivityDD: {selector: '//*[@id="1b24b4a3-ead6-edfa-cef1-8d3059b334e3"]/span/img', locateStrategy: 'xpath'},
        AddActivityBtn: {selector: '#add-activity-dropdown > div > div.body > button', locateStrategy: 'css selector'},
                       
                // Activity Details
        UploadActivity: {selector: '#activity-diagram-component > svg > g > g:nth-child(2) > g:nth-child(8) > g > text', locateStrategy: 'css selector'},
        TransformTableDataActivity: {selector: '//*[@id="activity-diagram-component"]/svg/g/g[2]/g[6]/rect', locateStrategy: 'xpath'},
        VATSummaryActivity: {selector :'#activity-diagram-component > svg > g > g:nth-child(2) > g:nth-child(12) > g > text', locateStrategy: 'css selector'},
        UploadSampleBtn: {selector: '#btnUpload--522888603', locateStrategy: 'css selector'},
        OutputTableNameInput: {selector: '//*[@id="container-83ea5e93-cf6d-4f0c-a76a-898fb63357b0"]/div/div[1]/div[3]/div[1]/input', locateStrategy: 'xpath'},
        OutputTableNameSaveBtn: {selector: '#container-d1eade08-3659-4f74-843a-c3406a7ed378 > div > div:nth-child(1) > div:nth-child(9) > div.col-3 > button', locateStrategy: 'css selector'},
        SelectHeaderRowBtn: {selector: '#container-d1eade08-3659-4f74-843a-c3406a7ed378 > div > div:nth-child(1) > div:nth-child(17) > div.m-b-16 > button:nth-child(2)', locateStrategy: 'css selector'},
        SelectHeaderRowInput: {selector: '#collapseExample--522888603 > div > fieldset > table > tbody > tr:nth-child(1) > td:nth-child(2) > input', locateStrategy: 'css selector'},
        ConfirmHeadRowBtn: {selector: '#collapseExample--522888603 > div > fieldset > table > tbody > tr:nth-child(2) > td > button:nth-child(2)', locateStrategy: 'css selector'},
        ConfirmSelectionBtn: {selector: '#container-d1eade08-3659-4f74-843a-c3406a7ed378 > div > div:nth-child(1) > div:nth-child(17) > fieldset > button', locateStrategy: 'css selector'},

// Organisation Settings
        OrganisationSettingsIcon: {selector: '//*[@id="left-menu"]/ul/li[2]/img', locateStrategy: 'xpath'},
        OrganisationSettingsText: {selector: '//*[@id="left-menu"]/ul/li[2]/div[2]', locateStrategy: 'xpath'},
        EntitiesIcon: {selector: '//*[@id="organisation-settings-expandable"]/li[1]/div[1]', locateStrategy: 'xpath'},
        PeriodsIcon: {selector: '//*[@id="organisation-settings-expandable"]/li[2]/div[1]', locateStrategy: 'xpath'},
        UsersIcon: {selector: '//*[@id="organisation-settings-expandable"]/li[3]/div[1]', locateStrategy: 'xpath'},
        UserGroupsIcon: {selector: '//*[@id="organisation-settings-expandable"]/li[4]/div[1]', locateStrategy: 'xpath'},
        AttributesIcon: {selector: '//*[@id="organisation-settings-expandable"]/li[5]/div[1]', locateStrategy: 'xpath'},
        SettingsIcon: {selector: '//*[@id="organisation-settings-expandable"]/li[6]/div[1]', locateStrategy: 'xpath'},
        
// Common Objects
        SuccessfulMessage: {selector: '/html/body/div[1]', locateStrategy: 'xpath'},
        AddBtn: {selector: '/html/body/app-root/div[2]/div/account/div/div[1]/div/add-button[1]/div/div/div[1]', locateStrategy: 'xpath'},
        
        //Entities 
        EntitiesTitle: {selector: '/html/body/app-root/div[2]/div/account/div/div[2]/app-entities/h4', locateStrategy: 'xpath'},
        NewEntityNameInput: {selector: '#newEntityModal > div > div > div.modal-body > div:nth-child(2) > div > input', locateStrategy: 'css selector'},
        NewEntitySaveBtn: {selector: '//*[@id="newEntityModal"]/div/div/div[3]/button[2]', locateStrategy: 'xpath'},
        NewEntityCloseBtn: {selector: '//*[@id="newEntityModal"]/div/div/div[3]/button[1]', locateStrategy: 'xpath'},
        ShowHideEntitiesBtn: {selector: '/html/body/app-root/div[2]/div/account/div/div[2]/app-entities/div/div/a', locateStrategy: 'xpath'},
        EntityDetailsBtn: {selector: '/html/body/app-root/div[2]/div/account/div/div[2]/app-entities/div/generic-table/div/div[1]/table/tbody/tr[1]/td[4]/div', locateStrategy: 'xpath'},
        CopyEntityBtn: {selector: '#cdk-overlay-0 > div > div > button:nth-child(1)', locateStrategy: 'css selector'},
        CopyBtn: {selector: '//*[@id="cloneModal"]/div/div/div[3]/button[2]', locateStrategy: 'xpath'},
        HideEntityBtn: {selector: '#cdk-overlay-0 > div > div > button:nth-child(2)', locateStrategy: 'css selector'},
        
        //Periods
        NewPeriodNameInput: {selector: 'body > app-root > div.main-content > div > schedule-edit > div > div.row.m-t-64 > div.col-lg-7 > input', locateStrategy: 'css selector'},
        PeriodTypeDD: {selector: '#\32 419d50c-58fc-97ac-b7bf-eab6f375c898', locateStrategy: 'css selector'},
        AnnuallyPeriodType: {selector: '//*[@id="a7292aea-8ba4-b888-21c3-2ac367beab39"]/div[1]', locateStrategy: 'xpath'},
        BiannuallyPeriodType: {selector: '//*[@id="a7292aea-8ba4-b888-21c3-2ac367beab39"]/div[2]', locateStrategy: 'xpath'},
        QuarterlyPeriodType: {selector: '//*[@id="a7292aea-8ba4-b888-21c3-2ac367beab39"]/div[3]', locateStrategy: 'xpath'},
        MonthlyPeriodType: {selector: '//*[@id="a7292aea-8ba4-b888-21c3-2ac367beab39"]/div[4]', locateStrategy: 'xpath'},
        SelectDateBtn: {selector: 'body > app-root > div.main-content > div > schedule-edit > div > div.row.animated.fadeInUp.m-t-8.m-t-24.ng-star-inserted > div:nth-child(2) > labeled-datepicker > div > div.labeled-datepicker-container > mat-datepicker-toggle > button > span', locateStrategy: 'css selector'},
        DateAug01: {selector: '//*[@id="mat-datepicker-8"]/div[2]/mat-month-view/table/tbody/tr[1]/td[2]/div', locateStrategy: 'xpath'},
        PrePopulateBtn: {selector: '//*[@id="populate0"]/a', locateStrategy: 'xpath'},
        NewPeriodSaveBtn: {selector: '/html/body/app-root/div[2]/div/schedule-edit/div/div[16]/div[2]/button', locateStrategy: 'xpath'}, 

        //Users
        EmailAddInput: {selector: '//*[@id="newUserModal"]/div/div/div[2]/div/div[1]/input', locateStrategy: 'xpath'},
        FullNameInput: {selector: '//*[@id="newUserModal"]/div/div/div[2]/div/div[2]/input', locateStrategy: 'xpath'},
        JobTitleInput: {selector: '//*[@id="newUserModal"]/div/div/div[2]/div/div[4]/input', locateStrategy: 'xpath'},
        InvitationMessage: {selector: '//*[@id="newUserModal"]/div/div/div[2]/div/div[5]/input', locateStrategy: 'xpath'},
        InviteBtn: {selector: '//*[@id="newUserModal"]/div/div/div[3]/button[2]', locateStrategy: 'xpath'},
        UserDetailsBtn: {selector: '/html/body/app-root/div[2]/div/account/div/div[2]/users/div/generic-table/div/div[1]/table/tbody/tr[1]/td[4]/div', locateStrategy: 'xpath'},
        DeleteUserBtn: {selector: '#cdk-overlay-0 > div > div > button:nth-child(1)', locateStrategy: 'css selector'},
        HideUserBtn: {selector: '#cdk-overlay-0 > div > div > button:nth-child(2)', locateStrategy: 'css selector'},

        //User Groups
        UserGroupNameInput: {selector: '/html/body/app-root/div[2]/div/user-groups-edit/div/div[1]/div[1]/input', locateStrategy: 'xpath'},
        AddMembersInput: {selector: '/html/body/app-root/div[2]/div/user-groups-edit/div/div[3]/div[1]/dropdown-autocomplete/div/input', locateStrategy: 'xpath'},
        AddMembersBtn: {selector: '/html/body/app-root/div[2]/div/user-groups-edit/div/div[3]/div[2]/button', locateStrategy: 'xpath'},
        SuggestedName: {selector: '/html/body/app-root/div[2]/div/user-groups-edit/div/div[3]/div[1]/dropdown-autocomplete/div/div[2]/div', locateStrategy: 'xpath'},
        NewUserGroupSaveBtn: {selector: 'body > app-root > div.main-content > div > user-groups-edit > div > div.flex-row.space-between.center.m-t-32 > button', locateStrategy: 'css selector'}, 
        UserGroupExm: {selector: '/html/body/app-root/div[2]/div/account/div/div[2]/user-groups/div/generic-table/div/div[1]/table/tbody/tr[4]/td/div/span', locateStrategy: 'xpath'},
        DeleteUserDetailsBtn: {selector: '/html/body/app-root/div[2]/div/user-groups-edit/div/generic-table/div/div[1]/table/tbody/tr[1]/td[3]/div', locateStrategy: 'xpath'},
        UGDeleteUserBtn: {selector: '//*[@id="cdk-overlay-4"]/div/div/button', locateStrategy: 'xpath'},
        DeleteUserGroup: {selector: '/html/body/app-root/div[2]/div/user-groups-edit/div/div[4]/div/a[2]', locateStrategy: 'xpath'},
        }
}