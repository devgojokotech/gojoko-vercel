//////////////////////////
//// Base Models Start////
//////////////////////////
export interface ButterCMSPageBaseModel {
    slug: string;
    name: string;
    published: string;
    updated: string;
    page_type: null;
    fields: any
}

export interface ComponentBaseModel {
    heading: string;
    paragraph_content: string;
    background_image: string;
};

export interface FeatureCardBaseModel {
    meta: Meta,
    project_name: string,
    title: string,
    description: string,
    icon: string,
    url: string
}

interface Meta {
    id: number
}

//////////////////////////
//// Base Models Ends/////
//////////////////////////


///////////////////////////////
//// Homepage Models Start ////
///////////////////////////////
export interface HomePageModel extends ButterCMSPageBaseModel {
    fields: {
        more_than_just_a_fintech: ComponentBaseModel;
        new_era: ComponentBaseModel;
        meet_our_team: MeetOurTeamModel;
        our_network: ComponentBaseModel;
        we_would_love_to_hear_from_you: ComponentBaseModel;
        our_partners: OurPartnersModel;
    };
}
export interface OurPartnersModel {
    heading: string;
    partners: { partner_name: string; partner_logo: string }[];
}

export interface MeetOurTeamModel {
    stakeholders: any[];
};

export interface NavigationMenuModel {
    label: string;
    meta: { id: number };
    url: string;

    project_name?: string;
}


export interface FooterComponentModel {
    goj_footer: FooterContentModel[];
}

export interface FooterContentModel {
    logo: string;
    description: string;
    goj_legal_links: NavigationMenuModel[];
    goj_menu_links: NavigationMenuModel[];
    contact_us: string;
    copy_right_content: string;
}
///////////////////////////////
//// About Model Start ////////
///////////////////////////////
export interface AboutPageModel extends ButterCMSPageBaseModel {
    fields: {
        who_is_gojoko: ComponentBaseModel;
        we_are_ready_for_challenges: WeAreAlwaysReady;
        why_choose_us: WhyChooseUsModel;
        our_expertise: OurExpertiseModel;
        we_would_love_to_hear_from_you: ComponentBaseModel;
    };
}

export interface OurExpertiseModel {
    heading: string;
    our_expertise_repeater: FeatureCardBaseModel[];
}

export interface WeAreAlwaysReady extends ComponentBaseModel {
    services: FeatureCardBaseModel[];
}
export interface WhyChooseUsModel {
    heading: string;
    why_choose_us_repeater: ComponentBaseModel[];
}


