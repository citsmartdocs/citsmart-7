title: Rules for automatic opening of service request via e-mail
Description: Here are some key rules related to automatic opening of Service Request via e-mail

# Rules for automatic opening of service request via e-mail

[BR] Here are some key rules related to automatic opening of Service Request via
e-mail:

1.  E-mails that are in your inbox without a read mark will be read and service
    requests will be opened from them.

2.  The system marks the e-mail as read so there is no duplicate registration.

3.  The system compares the sender's e-mail with the internal subscriptions to
    verify that he or she is a user.

4.  If the sender is a system user: the request is created with him as the
    requestor.

5.  If the sender is not a system user: the request is created with the
    requestor indicated in the automatic opening configuration screen.

6.  The attachments in the e-mail will be attached to the service request
    created, observed:

-   The parameter 318: List of file extensions that cannot be attached (For more
    than one extension separate with semicolons);

-   The parameter 278: Maximum size of file, in bytes to upload. Default
    [1073741824] = 1GB.



!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>07/23/2019 – Anna Martins
