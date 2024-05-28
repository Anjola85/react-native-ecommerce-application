import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";

const TermsScreen = () => {
  const Content = (
    <View style={{ marginHorizontal: "5%" }}>
      <Text>
        These terms and Conditions govern your use of the Quiikmart mobile
        application provided by Quiikmart Inc. By downloading, accessing or
        using the App,you agree to comply with these terms as follows
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>User Eligibility:</Text>
      </View>
      <Text>
        You must be at least 16 years old and legally capable of entering into a
        binding agreement to use the Quiikmart App.By using the App, you
        represent and warrant that you meet the eligibility requirements.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>App Usage: </Text>
      </View>
      <Text>
        The Quiikmart App is intended for personal, non-commercial use only.You
        may use the app to discover local stores, obtain directions, and place
        orders for personal consumption. You agree not to use the App for any
        unlawful, fraudulent or unauthorized purposes. You are solely
        responsible for any actions or content you transmit through the App.
      </Text>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Location-based services: </Text>
      </View>
      <Text>
        The Quiikmart App utilizes your device's location to provide you with
        store recommendations and relevant information based on your proximity.
        By using the App, you consent to the collection and processing of your
        location data. Quiikmart may store and use this information to enhance
        your user experience and deliver personalized services.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>User Accounts:</Text>
      </View>
      <Text>
        To access certain features of the App, you may be required to create a
        user account. We collect any information you decide to provide including
        your feedback and surveys that you decide to participate in (for example
        customer satisfaction surveys) and any other information that you
        provide during your interactions with our services and customer service
        personnel. You may also provide information to us about other people.
        For instance when you refer .a friend to use the App in these cases we
        may collect the recipients name and email. You are responsible for
        ensuring that you have permission to share their information with
        Quiikmart .You may not provide personal information about children under
        the age of 16 You are responsible for maintaining the confidentiality of
        your account information and all activities that occur under your
        account.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Date and Usage:</Text>
      </View>
      <Text>
        Quiikmart will record information about the device you use to connect to
        the services.This information includes your device's IP address, your
        device type, browser type, internet service provider, operating
        system.It may also include the frequency You agree to provide accurate
        and up-to-date information during the registration process..Quiikmart
        reserves the right to suspend or terminate your account if any
        information provided is found to be false or misleading.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Intellectual Property:</Text>
      </View>
      <Text>
        The Quiikmart App and it's content including but not limited to logos,
        trademarks, texts, graphics, images and software are the intellectual
        property of Quiikmart or its licensors and are protected by applicable
        copyright and intellectual property laws. You may not modify, reproduce,
        distribute, transmit, display, perform, or create derivative works from
        any part of the App without prior written consent from Quiikmart
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>
          Information Received from third parties:
        </Text>
      </View>
      <Text>
        If you login to Quiikmart through third-party services, we may receive
        some information about you and your use of that service.for example, if
        you choose to sign up with your facebook account or Google account,we
        may recebe information from these companies such as your name and email
        address.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Information Disclosure:</Text>
      </View>
      <Text>
        Affiliates,Service provders,and Third=party Partners : Quiikmartmay
        share your personal infromation with its affiliates,service providers,
        and thir-arty partners to assist in providing the App'sfeatures and
        functionality,including store recommendations,order processing,and
        delivery services.These entities are obligated to handle your
        information in a confidnetial and secure manner. We may also disclose
        ypu personal information to our marketing partners including social
        media platforms,thir-party advertising networks and other parties to
        help in quantifying our advertisements.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Privacy:</Text>
      </View>
      <Text>
        Your privacy is important to us. Quiikmart's Privacy policy governs the
        collection, use and disclosure of your personal information. Please
        review our privacy policy, available within the App or on our website.
        to understand how we handle your data. By using the app you consent to
        the collection, storage and processing of your personal information in
        accordance with our privacy policy.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Limitation of Liability:</Text>
      </View>
      <Text>
        Quiikmart endeavours to provide accurate and reliable information
        through the App. however, we make no guarantees regarding the accuracy,
        completeness or reliability of the content, including store information.
        In no event shall Quiikmart be liable for amy direct ,indirect,
        incidental, special or consequential damages arising out of or in
        connection with your use of the App or the content provided therein.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Information Security:</Text>
      </View>
      <Text>
        Quiikmart implements reasonable security measures to protect your
        information from unauthorized access, disclosure, alteration or
        destruction. In addition, when we collect or disclose your information
        we do so using systems and processes consistent with information privacy
        and security requirements under applicable federal and state laws
        however, please be aware that no data transmission or storage can be
        guaranteed to be 100% secure, and we cannot guarantee the absolute
        security of your information
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Severability:</Text>
      </View>
      <Text>
        If any provision of these Terms is found to be invalid, illegal, or
        unenforceable, the remaining provisions shall continue in full force and
        effect.The invalid or unenforceable, the remaining provisions shall
        continue in full force and effect.The invalid or unenforceable provision
        shall be deem superseded by a valid, enforceable provision that most
        closely matches the intent of the original provision.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Waiver:</Text>
      </View>
      <Text>
        The failure of Quiikmart to enforce any provision of these Terms shall
        not be considered a waiver of such provision. Any waiver of any
        provision of these Terms will be effective only if it is in writing and
        signed by an authorized representative of Quiikmart.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Modification:</Text>
      </View>
      <Text>
        Quiikmart reserves the right to modify ,suspend or terminate the App ,or
        any part thereof, at any time without prior notice. We may also update
        these terms from time to time.your continued use of the App after the
        revised terms have been posted constitutes your acceptance of the
        changes.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Your Choices and Rights:</Text>
      </View>
      <Text>
        You have the right to access, update and correct your personal
        information within the Apps'setting or by contacting Quiikmart.You can
        choose to disable location services on your device, but this may limit
        certain features of the App.You may request that Quiikmart provide you
        with a copy of your personal information or request that we delete your
        personal information.To do so we require you submit up to three pieces
        of personal information to do this.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Appeals:</Text>
      </View>
      <Text>
        If you believe that your access to our use of the App has been
        unjustifiable or you submit a request to exercise any of the rights
        described above and we do not take action on the request, you may appeal
        our decision if you are in an eligible jurisdiction.To appeal our
        decision, please email us at customercare@Quiikmart.com with the subject
        line “Rights Request Appeal”.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Governing Law:</Text>
      </View>
      <Text>
        These terms shall be governed by and the construed in accordance with
        the laws of Canada without regard to its conflict of law principles We
        may share your information when we believe that the disclosure is
        reasonably essential to follow with applicable laws or requests.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "600" }}>Children's Privacy:</Text>
      </View>
      <Text>
        We understand the need to protect the privacy of children online.
        Quiikmart is not designed for children under the age of 16 and we do not
        knowingly collect Personal information from children under the age of
        16, we will take the required processes and steps to remove such persons
        or person from our records.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text>
          By using Quiikmart, you acknowledge that you have read, understood,
          and agreed to these Terms and Conditions. If you do not agree to these
          Terms and Conditions, you may not use the App. Contact Us : If you
          have any questions or concerns about these Terms and Conditions,
          please contact us.
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.background}>
      <View style={{ paddingHorizontal: 15 }}>
        <Header title="Terms and Conditions" hasSeperator hasButton />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {Content}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    flexGrow: 1,
    width: "100%",
    paddingTop: "5%",
  },
  cards: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5%",
  },
  back_button: {
    marginLeft: "5%",
    marginBottom: "2%",
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    marginBottom: "5%",
    textAlign: "center",
  },
});

export default TermsScreen;
