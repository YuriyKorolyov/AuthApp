package com.authapi.api.dto;

import lombok.Data;

@Data
public class RegisterDto {
    private String username;
    private String password;
}