package com.youtube.jwt.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    private String userName;
    private String userFirstName;
    private String userLastName;
    private String userEmail;
    private String userContact;
    private String userPassword;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;

}
