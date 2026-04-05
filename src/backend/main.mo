import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Bool "mo:core/Bool";
import Runtime "mo:core/Runtime";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactMessage {
    public func compare(a : ContactMessage, b : ContactMessage) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let contactMessages = Map.empty<Principal, ContactMessage>();

  public shared ({ caller }) func sendContactMessage(name : Text, email : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactMessages.add(caller, contactMessage);
  };

  func isAdmin(caller : Principal) : Bool {
    Text.equal(caller.toText(), "xydfy-rifhu-kb6rp-evxra-itpbl-6bt3b-gzqyx-llxi6-dzgnm-3nnzq-jqe") //B Vivekanand Patnaik
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    if (isAdmin(caller)) {
      contactMessages.values().toArray().sort();
    } else {
      Runtime.trap("Unauthorized: Admin access required");
    };
  };
};
